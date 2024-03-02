const scrumRole = {
  holdsMeeting: false,
  teams: ['team1', 'team2'],
};

const productOwnerRole = {
  holdsMeeting: true,
  reportsTo: 'upperManagement',
};

function mergeRoles<T extends object, U extends object>(role1: T, role2: U) {
  return { ...role1, ...role2 };
}

const mergedRole = mergeRoles(scrumRole, productOwnerRole);

// autocompleteがちゃんと効く
mergedRole.holdsMeeting;
mergedRole.teams;
mergedRole.reportsTo;
