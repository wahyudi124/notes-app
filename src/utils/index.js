const mapDBtoModel = ({
  // eslint-disable-next-line camelcase
  id, title, body, tags, created_at, updated_at, username,
}) => ({
  id,
  title,
  body,
  tags,
  createAt: created_at,
  upadateAt: updated_at,
  username,
});

module.exports = mapDBtoModel;
