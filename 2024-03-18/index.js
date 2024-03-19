let studentList = document.getElementById('students-list')

const studentForm = document.querySelector('#student-form')

studentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    let firstName = form['first-name'].value;
    let secondName = form['second-name'].value;
    let phoneNumber = form['phone-number'].value;
    let email = form['email'].value;
    let itKnowledge = form['it-knowledge'].value;
    let group = form['feu'].value;
    let checkedProgrammingLanguages = document.querySelectorAll('input[name="programming-language[]"]:checked');

    let studentItem = document.createElement('div')
    studentList.append(studentItem)
    createStudentItem()

    let studentName = document.createElement('h2')
    studentName.textContent = `Name: ${firstName}`;
    studentItem.append(studentName)
    let studentSecondName = document.createElement('h2')
    studentSecondName.textContent = `Second name: ${secondName}`
    studentName.after(studentSecondName)
    let studentNumber = document.createElement('h3')
    studentNumber.textContent = `Phone number: ${phoneNumber}`;
    studentSecondName.after(studentNumber)
    let studentEmail = document.createElement('p')
    studentEmail.textContent = `Email: ${email}`;
    studentNumber.after(studentEmail)
    let studentKnowledge = document.createElement('p')
    studentKnowledge.textContent = `IT knowledge: ${itKnowledge}`;
    studentEmail.after(studentKnowledge)
    let studentGroup = document.createElement('p')
    studentGroup.textContent = `Selected group: ${group}`;
    studentKnowledge.after(studentGroup)
    let studentProgrammingLanguages = document.createElement('ul')
    studentGroup.after(studentProgrammingLanguages)
    let listTitle = document.createElement('h2')
    listTitle.textContent = 'Selected programming languages';
    studentProgrammingLanguages.append(listTitle)
    checkedProgrammingLanguages.forEach((checkbox) => {
        let programmingList = document.createElement('li')
        programmingList.textContent = checkbox.value;
        studentProgrammingLanguages.append(programmingList)
    })
})
let createStudentItem = () => {

}
