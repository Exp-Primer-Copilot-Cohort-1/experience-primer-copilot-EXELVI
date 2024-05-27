function skillsMembers() {
    var members = [
        {name: 'John', skills: ['Java', 'C++', 'Python']},
        {name: 'Jane', skills: ['JavaScript', 'HTML', 'CSS']},
        {name: 'Jack', skills: ['Python', 'Ruby', 'Java']}
    ];
    var skills = [];
    for (var i = 0; i < members.length; i++) {
        for (var j = 0; j < members[i].skills.length; j++) {
            if (skills.indexOf(members[i].skills[j]) === -1) {
                skills.push(members[i].skills[j]);
            }
        }
    }
    return skills;
}