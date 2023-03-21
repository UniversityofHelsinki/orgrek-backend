const SHIBBOLETH_COOKIE_NAME = '_shibsession_';

const ROLE_READER = 'ROLE_READER';
const ROLE_ADMIN = 'ROLE_ADMIN';
const ROLE_WRITER = 'ROLE_WRITER';

const MAPPED_ROLES = Object.freeze({
    ROLE_WRITER: 'grp-orgrek-role-writer',
    ROLE_ADMIN: 'grp-orgrek-role-admin',
    ROLE_READER_ALL: 'grp-orgrek-role-reader-all',
});

module.exports = {
    SHIBBOLETH_COOKIE_NAME,
    ROLES: MAPPED_ROLES,
    ROLE_READER: ROLE_READER,
    ROLE_ADMIN: ROLE_ADMIN,
    ROLE_WRITER: ROLE_WRITER
};
