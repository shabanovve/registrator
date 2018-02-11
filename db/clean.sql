CREATE OR REPLACE FUNCTION drop_DB_objects()
RETURNS VOID AS $$

DECLARE 
 rd_object RECORD;
 v_idx_statement VARCHAR(500);  

BEGIN

 ---1. Dropping all stored functions
 RAISE NOTICE '%', 'Dropping all stored functions...'; 
 FOR rd_object IN ( SELECT format('%I.%I(%s)', ns.nspname, p.proname, oidvectortypes(p.proargtypes)) as functionDef
       FROM pg_proc p 
      INNER JOIN pg_namespace ns ON (p.pronamespace = ns.oid)
      WHERE ns.nspname = current_schema
        AND p.proname <> 'drop_db_objects'
   )
 LOOP     

  v_idx_statement = 'DROP FUNCTION ' || rd_object.functionDef;
  RAISE NOTICE '%', v_idx_statement;
  EXECUTE v_idx_statement;
  
 END LOOP; 
 RAISE NOTICE '%', 'Done. Droped all stored functions...';
 
 --2. Dropping all views
 RAISE NOTICE '%', 'Dropping all views...'; 
 FOR rd_object IN ( SELECT viewname 
       FROM pg_views 
      WHERE schemaname = current_schema
   )
 LOOP     
  v_idx_statement = 'DROP VIEW ' || current_schema || '.' || rd_object.tablename;
  RAISE NOTICE '%', v_idx_statement;
  EXECUTE v_idx_statement;
 END LOOP; 
 RAISE NOTICE '%', 'Done. Droped all views...';

 --3. Dropping all table objects
 RAISE NOTICE '%', 'Dropping all table objects...';
 -- Drop child partitions first and then the base tables.
 FOR rd_object IN (
    with child as (
      SELECT c.relname AS tablename, 0 as parent
      FROM   pg_inherits 
      JOIN   pg_class AS c ON (inhrelid=c.oid)
      WHERE  c.relnamespace IN ( SELECT oid FROM   pg_namespace WHERE nspname = current_schema)
          )
    select * from child
    union all       
    SELECT tablename, 1 as parent FROM pg_tables 
    WHERE schemaname = current_schema
      AND tablename not in (select inn.tablename from child inn)
    order by parent   
    )
 LOOP

  v_idx_statement = 'DROP TABLE ' || current_schema || '.' || rd_object.tablename || 'CASCADE';
  RAISE NOTICE '%', v_idx_statement;
  EXECUTE v_idx_statement;
 END LOOP; 
 RAISE NOTICE '%', 'Done. Droped all table objects...';

 --4. Dropping all Sequence objects
 RAISE NOTICE '%', 'Dropping all Sequence objects...'; 
 FOR rd_object IN ( SELECT sequence_name 
       FROM information_schema.sequences 
      WHERE sequence_schema = current_schema
   )
 LOOP     

  v_idx_statement = 'DROP SEQUENCE ' || current_schema || '.' || rd_object.sequence_name;
  RAISE NOTICE '%', v_idx_statement;
  EXECUTE v_idx_statement;
 END LOOP; 
 RAISE NOTICE '%', 'Done. Droped all sequences...';

 
END;
$$  LANGUAGE plpgsql; 
 
SELECT * FROM drop_DB_objects();

DROP FUNCTION drop_DB_objects();

