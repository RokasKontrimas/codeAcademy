let studentList = document.getElementById('students-list')

const studentForm = document.querySelector('#student-form')

const userNotification = document.createElement('span')
userNotification.style.color = 'green'
userNotification.style.fontSize = '24px'

const rangeElement = document.querySelector('input[name="it-knowledge"]')
const rangeTracker = document.createElement('span')
rangeElement.after(rangeTracker)
rangeTracker.textContent = rangeElement.value;
rangeElement.addEventListener('input', () => {
    // console.log(rangeElement.value)
    rangeTracker.textContent = rangeElement.value;
})
studentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form['first-name'].value;
    const secondName = form['second-name'].value;
    const phoneNumber = form['phone-number'].value;
    const email = form['email'].value;
    const itKnowledge = form['it-knowledge'].value;
    const group = form['feu'].value;
    const checkedProgrammingLanguages = document.querySelectorAll('input[name="programming-language"]:checked');
    studentForm.after(userNotification)
    userNotification.textContent = `Created user ${firstName} ${secondName}`
    setTimeout(() => {
        userNotification.remove()
    }, 1200)

    createStudentItem(firstName, secondName, phoneNumber, email, itKnowledge, group, checkedProgrammingLanguages, form)
    form.reset()
    rangeTracker.textContent = rangeElement.value;
})


const createStudentItem = (firstName, secondName, phoneNumber, email, itKnowledge, group, checkedProgrammingLanguages) => {
    const studentItem = document.createElement('div')
    studentList.append(studentItem)
    const studentName = document.createElement('h2')
    studentName.textContent = `Name: ${firstName}`;
    studentItem.append(studentName)
    const studentSecondName = document.createElement('h2')
    studentSecondName.textContent = `Second name: ${secondName}`
    studentName.after(studentSecondName)
    const studentNumber = document.createElement('h3')
    studentNumber.textContent = `Phone number: ${phoneNumber}`;
    studentSecondName.after(studentNumber)
    const studentEmail = document.createElement('p')
    studentEmail.textContent = `Email: ${email}`;
    studentNumber.after(studentEmail)
    const studentKnowledge = document.createElement('p')
    studentKnowledge.textContent = `IT knowledge: ${itKnowledge}`;
    studentEmail.after(studentKnowledge)
    const studentGroup = document.createElement('p')
    studentGroup.textContent = `Selected group: ${group}`;
    studentKnowledge.after(studentGroup)
    const studentProgrammingLanguages = document.createElement('ul')
    studentGroup.after(studentProgrammingLanguages)
    const listTitle = document.createElement('h2')
    listTitle.textContent = 'Selected programming languages';
    studentProgrammingLanguages.append(listTitle)
    checkedProgrammingLanguages.forEach((checkbox) => {
        const programmingList = document.createElement('li')
        programmingList.textContent = checkbox.value;
        studentProgrammingLanguages.append(programmingList)
    })
}

