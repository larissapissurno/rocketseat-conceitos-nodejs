const { isUuid } = require("uuidv4");

function validateIsUuId(request, responsse, next) {
  const { id } = request.params;

  if (!isUuid(id)) {
    return responsse.status(400).json({error: "Inform a valid uuid."});
  }

  next();
}

module.exports = validateIsUuId;