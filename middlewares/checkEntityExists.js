import mongoose from 'mongoose';

// Middleware para verificar si una entidad existe
export const checkEntityExists = (model, paramName) => {
  return async (req, res, next) => {
    try {
      const entityId = req.params[paramName];

      // Verificar si el ID es válido
      if (!mongoose.Types.ObjectId.isValid(entityId)) {
        return res.status(400).send({
          status: "error",
          message: `ID no válido: ${entityId}`
        });
      }

      const entityExists = await model.findById(entityId);

      if (!entityExists) {
        return res.status(404).send({
          status: "error",
          message: `No existe la entidad con el ID ${entityId}`
        });
      }

      // Pasar al siguiente middleware
      next();

    } catch (error) {
      return res.status(500).send({
        status: "error",
        message: "Error al verificar la entidad",
        error: error.message
      });
    }
  };
};

