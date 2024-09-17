function getFormvalue(event) {
    //Write your code here
	event.preventDefault();
	var firstName=document.getElementsByName("fname")[0].value;
	var lastName=document.getElementsByName("lname")[0].value;

	alert(firstName + " " + lastName);

}
