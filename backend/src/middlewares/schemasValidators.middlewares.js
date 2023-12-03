const validateSchemas = (schema, schemasValidator) => {
    schema.pre('save', async function (next) {
        try {
            await schemasValidator.parseAsync(this.toObject())
            next();
        } catch (error) {
            next(error)
        }
    });
}

export default validateSchemas
