Select *
from record_schema.record;

INSERT INTO record_schema.record(date,personal_notes_primary_key,teaname)
values(current_date,2,'Jasmine Silver Neddles')


insert into personal_notes_schema.personal_notes(date, teaname, brew_style,aroma, 
head, body, tail, field,record_pk)
values ( current_date,'Jasmine Silver Needles', 'Gong fu', 'Floral','Floral','Earthy', 'Floral','This a 2nd test course',2)


select *
from personal_notes_schema.personal_notes

-- access the reords first and then create the personal notes