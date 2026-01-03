// 1. Find all the topics and tasks which are thought in the month of October
To Fetch the records from the collections
db.topics.find({
  class_taught_date:{
    $gte:ISODate("2020-10-01"),
    $lte:ISODate("2020-10-31")
  }
})

db.tasks.find({
  due_date: {
    $gte: ISODate("2020-10-01"),
    $lte: ISODate("2020-10-31")
  }
})


//2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.company_drives.find({
  drive_date: {
    $gte: ISODate("2020-10-15"),
    $lte: ISODate("2020-10-31")
  }
})


// 3.Find all the company drives and students who are appeared for the placement.
db.company_drives.aggregate([
  {$match:{ student_attended: true}},
  {$project:{ userid:1, company_name:1}}
])


// 4. Find the number of problems solved by the user in codekata
db.codekata.aggregate([
  { $match: { userid: 1 } },
  { $project: { userid: 1, problems_solved: 1} }
])


// 5. Find all the mentors with who has the mentee's count more than 15
To fetch the records grater than 15
db.mentors.find({
  mentee_count: {$gt: 15}
})


// 6. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.attendance.find({
  status: "absent",
  date: {
    $gte: ISODate("2020-10-15"),
    $lte: ISODate("2020-10-31")
  }
})

db.tasks.find({
  submitted: false,
  due_date: {
    $gte: ISODate("2020-10-15"),
    $lte: ISODate("2020-10-31")
  }
})

//End
