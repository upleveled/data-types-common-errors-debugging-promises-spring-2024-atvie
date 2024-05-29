// A team list with:
// - name
// - job position
// - role (editor, admin, no rights)
// - pets (with name and type)

const teamRoles = {
  editor: 'editor',
  admin: 'admin',
  noRights: 'no-Rights',
};

const teamMembers = [
  {
    id: 1,
    name: 'Antje',
    jobPosition: 'CEO',
    role: teamRoles.admin,
    pets: [
      {
        name: 'wuff',
        type: 'dog',
      },
      {
        name: 'miau',
        type: 'cat',
      },
    ],
  },
  {
    id: 2,
    name: 'Victor',
    jobPosition: 'Developer',
    role: teamRoles.editor,
    pets: [],
  },
];

console.log(typeof teamMembers); // object
console.log(Array.isArray(teamMembers)); // true
console.log(Array.isArray({})); // false

console.log(typeof teamMembers.name); // undefined, because no index
console.log(typeof teamMembers[0].name); // string
console.log(typeof teamMembers[0].pets); // object
console.log(typeof null); // object
console.log(Array.isArray(teamMembers[0].pets)); // true

if (typeof teamMembers[0].name !== 'string') {
  throw new Error('name is not a string');
}

// Mutable
teamMembers.push({
  id: 3,
  name: 'Karl',
  jobPosition: 'Developer',
  role: teamRoles.editor,
  pets: [],
});

// Immutable
const newTeamMembers = [
  ...teamMembers,
  {
    id: 3,
    name: 'Lukas',
    jobPosition: 'editor',
    role: teamRoles.admin,
    pets: [],
  },
];

console.log('new team members array:', newTeamMembers);

teamMembers[0].name = 'Antje';

// Update team member name from Antje to Peter
const antje = teamMembers.find((teamMember) => {
  return teamMember.name === 'Antje';
});

console.log(antje);

if (antje) {
  antje.name = 'Peter';
}

console.log('team members after mutable name change', teamMembers);

// Immutable name change from Antje to Matthias
const updatedTeamMembers = teamMembers.map((teamMember) => {
  if (teamMember.name === 'Antje') {
    return {
      ...teamMember,
      name: 'Matthias',
    };
  }
  return teamMember;
});

console.log('team members after immutable name change', updatedTeamMembers);

// Filter all team members with job position Developer
const filterJobPosition = teamMembers.filter((teamMember) => {
  return teamMember.jobPosition === 'Developer';
});

console.log(filterJobPosition);
