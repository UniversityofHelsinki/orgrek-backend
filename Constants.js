const SHIBBOLETH_COOKIE_NAME = '_shibsession_';

const ROLE_READER = 'ROLE_READER';

const MAPPED_ROLES = Object.freeze({
    ROLE_WRITER: 'grp-orgkrek-role-writer',
    ROLE_ADMIN: 'grp-orgkrek-role-admin',
    ROLE_READER_ALL: 'grp-orgkrek-role-reader-all'
});

module.exports = {
    SHIBBOLETH_COOKIE_NAME,
    ROLES: MAPPED_ROLES,
    ROLE_READER: ROLE_READER
};
