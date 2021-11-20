const { submitQuery } = require("~root/lib/database");

const selectEvents = () => submitQuery`
SELECT * FROM events 
`;
module.exports = selectEvents;

// star yerine isteğimizi seçelim
// your SQL query goes here
