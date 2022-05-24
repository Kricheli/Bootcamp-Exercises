// Instructions
// Here is your school object (see below):
// Take the school object and create the following methods to
// that object: 
// 1. A method called “findPerson” that takes two arguments, 
// a type (either a student or teacher), and an id.
// It will return a particular object of that person.
// 2. A method called “assignStudent” that takes two 
// arguments, a student’s id and a subject.
// Assign all of the students to the first available teacher who 
// teaches that subject and who is not in full capacity. If all of 
// the teachers are in full capacity log to the console “Sorry, 
// no available teachers left”.
// 3. A method called “assignTeachersSubject” that takes two 
// arguments, the teacher’s id, a new subject.
// Assign the new subject to that particular teacher if that 
// subject doesn’t exist in their array of subjects
// 4. Create a new method of anything you want.


const school = {
          teachers: [
            {
              id: 1,
              name: "Pinchas",
              subjects: ["chemistry", "biology", "physics"],
              students: [],
              capacityLeft: 3,
            },
            {
              id: 2,
              name: "Williams",
              subjects: ["history", "ethics"],
              students: [],
              capacityLeft: 2,
            },
          ],
          students: [
            {
              id: 10,
              name: "Jennifer",
              age: 20,
            },
            {
              id: 11,
              name: "Howard",
              age: 23,
            },
            {
              id: 12,
              name: "Old-Timmy",
              age: 86,
            },
            {
              id:13,
              name: "Houston",
              age: 21,
            },
          ],
        };


               const findPerson = (userInput, id) => {
                       const person = userInput.find(elemnt => elemnt.id === id);
                       return person;
               }
               console.log(findPerson(school.students, 12));

               console.log('-------------------------------------  2  ---------------------------------------------');

               const assignStudent = (studentId, requestedSubject) => {
                const avalibleTeachers = school.teachers.find((elemnt) => elemnt.subjects.includes(requestedSubject));
                if(avalibleTeachers){
                        avalibleTeachers.students.push(studentId);
                }else{
                        console.log('There are no avalible teachers at the moment');
                }
        };
           console.log(assignStudent(13, "history"));

        
        console.log('-------------------------------------  3  ---------------------------------------------');

       const assignTeachersSubject = (teacherId, newSubject) => {
               const teacherNewSubject = school.teachers.find((elemnt) => elemnt.id === teacherId);
               if(teacherNewSubject.subjects.includes(newSubject)){
                       console.log('I already teach that course');
               }else{
                       teacherNewSubject.subjects.push(newSubject);
               }
       }
       assignTeachersSubject(2, "biology");
       console.log(school.teachers);

       console.log('-------------------------------------  4  ---------------------------------------------');

       const myOwnMethod = (studentId) => {
               const thatStudent = school.students.find((elemnt) => elemnt.id === studentId)
               if(thatStudent.age > 60){
               console.log('There is no age for school');
               }
       };
       myOwnMethod(12);



