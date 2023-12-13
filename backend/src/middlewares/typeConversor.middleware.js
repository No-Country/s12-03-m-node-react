export const typeConversor = (req, res, next) => {
    req.body.age= +req.body.age,
    req.body.geo_point = [
        +req.body.geo_point[0],
        +req.body.geo_point[1]
    ]
    next();
};
