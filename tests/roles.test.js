const { calculateUserRoles } = require('../service/userService');

describe('Role tests based on request headers', () => {
   it('adds ROLE_READER to everybody',  () => {
      const user = { eppn : 'test', preferredlanguage: 'fi', hyGroupCn: ''}
      expect(calculateUserRoles(user)).toEqual( {"eppn": "test", "hyGroupCn": "", "preferredlanguage": "fi", "roles": ["ROLE_READER"]});
   });

   it('adds ROLE_ADMIN from iam-group grp-orgkrek-role-admin',  () => {
      const user = { eppn : 'test', preferredlanguage: 'fi', hyGroupCn: 'grp-orgkrek-role-admin'}
      expect(calculateUserRoles(user)).toEqual( {"eppn": "test", "hyGroupCn": "grp-orgkrek-role-admin", "preferredlanguage": "fi", "roles": ["ROLE_READER", "ROLE_ADMIN"]});
   });

   it('adds ROLE_WRITER from iam-group grp-orgkrek-role-admin',  () => {
      const user = { eppn : 'test', preferredlanguage: 'fi', hyGroupCn: 'grp-orgkrek-role-writer'}
      expect(calculateUserRoles(user)).toEqual( {"eppn": "test", "hyGroupCn": "grp-orgkrek-role-writer", "preferredlanguage": "fi", "roles": ["ROLE_READER", "ROLE_WRITER"]});
   });

   it('adds ROLE_READER_ALL from iam-group grp-orgkrek-role-reader-all',  () => {
      const user = { eppn : 'test', preferredlanguage: 'fi', hyGroupCn: 'grp-orgkrek-role-reader-all'}
      expect(calculateUserRoles(user)).toEqual( {"eppn": "test", "hyGroupCn": "grp-orgkrek-role-reader-all", "preferredlanguage": "fi", "roles": ["ROLE_READER", "ROLE_READER_ALL"]});
   });
});
