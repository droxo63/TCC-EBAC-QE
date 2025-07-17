const Ajv = require('ajv');

const ajv = new Ajv({ allErrors: true });

function validateSchema(data, schema) {
  const validate = ajv.compile(schema);
  const valid = validate(data);
  if (!valid) {
    console.error(validate.errors);
    throw new Error('Contrato inválido!');
  }
}

module.exports = validateSchema;
