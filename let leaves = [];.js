let leaves = [];

function applyLeave() {
  const teacherName = document.getElementById("teacher-name").value;
  const leaveDate = document.getElementById("leave-date").value;
  const leaveReason = document.getElementById("leave-reason").value;

  const leave = { teacherName, leaveDate, leaveReason };
  leaves.push(leave);

  const leaveHistory = document.getElementById("leave-history");
  leaveHistory.innerHTML = "";

  for (let i = 0; i < leaves.length; i++) {
    const div = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p1.innerText = `Teacher Name: ${leaves[i].teacherName}`;
    p2.innerText = `Leave Date: ${leaves[i].leaveDate}`;
    p3.innerText = `Leave Reason: ${leaves[i].leaveReason}`;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    leaveHistory.appendChild(div);
  }

  document.getElementById("teacher-name").value = "";
  document.getElementById("leave-date").value = "";
  document.getElementById("leave-reason").value = "";
  document.getElementById("apply-leave-sent").innerHTML = "Apply Leave Sent";
}