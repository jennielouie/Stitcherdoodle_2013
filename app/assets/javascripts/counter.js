//Counter requires user input on total rows in div 'repeatstotal'.  If saved from previous session, totalrows come from the database.  User can change this value.  If changed, the "left to do" value in 'repeatstodo' div is also changed to equal total rows.  The buttons increment the "done" (repeatsdone div) and "left to do" counters, until 'left to do' equals zero.  there is a 'save my place' button that will update the user_project record with currentInst, repsDone and totalReps.  That button will be associated with a (hidden?) edit form pre-filled with user_id and project_id and populated with the instruction/row information.  Perhaps show on single page so user can confirm

// function initializeCounter () {
//   //make ajax request for counter initialize data
//   $.ajax( {
//       url: "/users/" + current_user.id + "/user_project/" + user_project.id,
//       type: "get"
//   } ).done(function(data) {
//     var totalRep = data.totalRep || 0;
//     var repsDone = data.repsDone || 0;
//     var repsTodo = totalRep - repsDone;
//     $('.repeatstotal').empty();
//     $('.repeatstotal').innerHTML(totalRep);
//     $('.repeatsdone').innerHTML(repsDone);
//     $('.repeatstodo').innerHTML(repsTodo);
//   }
// }

// function increaseCount () {
// var totalRep = $('.repeatstotal').value;
// var repsDone = $('.repeatsdone').value;
// var repsTodo = totalRep - repsDone; //get value from repstotal and repsdone,
//   if (repsDone >= totalRep) {
//     alert("Uh-oh, looks like you've done" + (totalRep - repsDone + 1) + " too many repeats.")
//   }
//   elsif (repsDone = totalRep-1) {
//     alert("Congrats you've finished all repeats")
//   }
//   else {
//     repsDone++;
//     repsTodo = totalRep - repsDone
//   }
// }

// function decreaseCount () {
// var totalRep = $('.repeatstotal').value;
// var repsDone = $('.repeatsdone').value;
// var repsTodo = totalRep - repsDone;
//   if (repsDone = 0) {
//     alert("Total repeats completed cannot be less than zero.")
//   }
//   else {
//     repsDone--;
//     repsTodo = totalRep - repsDone;
//   }
// }

// function resetCount () {
//   $('.repeatstotal').innerHTML(0);
//   $('.repeatsdone').innerHTML(0);
//   $('.repeatstodo').innerHTML(0);
// }
