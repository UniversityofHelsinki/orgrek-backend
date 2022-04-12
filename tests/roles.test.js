const { calculateUserRoles } = require('../service/userService');

describe('Role tests based on request headers', () => {
   it('adds ROLE_READER to everybody',  () => {
      const user = { eppn : 'test', preferredlanguage: 'fi', hyGroupCn: ''}
      expect(calculateUserRoles(user).roles).toBeDefined();
      expect(calculateUserRoles(user).roles.length).toEqual(1);
      expect(calculateUserRoles(user).roles).toEqual(  ["ROLE_READER"]);
   });

   it('adds ROLE_ADMIN from iam-group grp-orgkrek-role-admin',  () => {
      const user = { eppn : 'test', preferredlanguage: 'fi', hyGroupCn: 'grp-orgkrek-role-admin'}
      expect(calculateUserRoles(user).roles).toBeDefined();
      expect(calculateUserRoles(user).roles.length).toEqual(2);
      expect(calculateUserRoles(user).roles).toEqual(  ["ROLE_READER", "ROLE_ADMIN"]);
   });

   it('adds ROLE_WRITER from iam-group grp-orgkrek-role-admin',  () => {
      const user = { eppn : 'test', preferredlanguage: 'fi', hyGroupCn: 'grp-orgkrek-role-writer'}
      expect(calculateUserRoles(user).roles).toBeDefined();
      expect(calculateUserRoles(user).roles.length).toEqual(2);
      expect(calculateUserRoles(user).roles).toEqual(  ["ROLE_READER", "ROLE_WRITER"]);
   });

   it('adds ROLE_READER_ALL from iam-group grp-orgkrek-role-reader-all',  () => {
      const user = { eppn : 'test', preferredlanguage: 'fi', hyGroupCn: 'grp-orgkrek-role-reader-all'}
      expect(calculateUserRoles(user).roles).toBeDefined();
      expect(calculateUserRoles(user).roles.length).toEqual(2);
      expect(calculateUserRoles(user).roles).toEqual(  ["ROLE_READER", "ROLE_READER_ALL"]);
   });
});
