function skillsMember() 
{    var member = {
        name: "John Doe",
        age: 30,
        skills: ["JavaScript", "Python", "C++"]
    };

    console.log("Member Name: " + member.name);
    console.log("Member Age: " + member.age);
    console.log("Member Skills: " + member.skills.join(", "));
}

skillsMember();