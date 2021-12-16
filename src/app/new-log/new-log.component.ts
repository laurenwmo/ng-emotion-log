import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-log',
  templateUrl: './new-log.component.html',
  styleUrls: ['./new-log.component.scss']
})
export class NewLogComponent implements OnInit {

  public emotions = [
  "anxious",
  "happy",
  "depressed",
  "stressed",
  "appreciated",
  "comfortable",
  "lonely",
  "creative",
  "sensitive",
  "vulnerable",
  "loving",
  "romantic",
  "betrayed",
  "unappreciated",
  "elated",
  ]

  constructor() { }

  ngOnInit(): void {
  }

}



// <script>
// //changes color of submit button on mouseover
// var item = document.getElementById("submitButton");
// item.addEventListener("mouseover", func, false);
// item.addEventListener("mouseout", func1, false);

// function func()
// {  
// item.setAttribute("style", "background-color:pink;")
// }

// function func1()
// {  
// item.setAttribute("style", "")
// }

// // //prints form data
// // function logSubmit(event) {
// //   log.textContent = `${event.formData}`;
// //   event.preventDefault();
// // }
// // const form = document.getElementById('addLog');
// // const log = document.getElementById('log');
// // form.addEventListener('submit', logSubmit);
// </script>

// <script>
// function getWeekday() {
//     const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//      const d = new Date();
//      let day = weekday[d.getDay()];
//      return day;
// }   
// function getDate() {
//     const d = new Date();
//     let date = d.getDate();
//     return date;
// }

// function getMonth() {
//     const d = new Date();
//     let month = d.getMonth();
//     return month
// }
// function getFullYear() {
//     const d = new Date();
//     let year = d.getFullYear()
//     return year
// }

// document.getElementById("dateDiv").innerHTML = "hello! today is " + getWeekday().toLowerCase() + ", " + getMonth() + "/" + getDate()  + "/" + getFullYear();

// </script>
