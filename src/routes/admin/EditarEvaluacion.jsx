import { Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editarEvaluacion } from "api/editarEvaluacion";
import { editEvaluacion, useEvaluaciones } from "store/features/evaluaciones";
import { setLoading, setSnackbar } from "store/features/main";
import CustomForm from "components/CustomForm";

function EditarEvaluacion() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { evaluacionId, id, lapso } = useParams();
  const [error, setError] = useState(false);

  const evaluacion = useEvaluaciones({ materiaId: id, lapso }).find(
    (ev) => ev.id == parseInt(evaluacionId)
  );

  const [titulo, setTitulo] = useState("");

  useEffect(() => {
    if (evaluacion?.titulo) {
      setTitulo(evaluacion?.titulo);
    }
  }, [evaluacion?.titulo]);

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (titulo.trim() === "") {
      setError(true);
      return;
    }

    dispatch(setLoading(true));
    const res = await editarEvaluacion({ id: evaluacionId, titulo });
    if (res.status == 200) {
      navigate(-1);
      dispatch(
        editEvaluacion({
          materiaId: id,
          evaluacionId,
          evaluacion: res.data,
        })
      );
      dispatch(setSnackbar(["Evaluacion editada con exito", "success"]));
    }
    dispatch(setLoading(false));
  };

  const onChangeTitulo = (ev) => {
    setTitulo(ev.target.value);
    setError(false);
  };

  return (
    <>
      <Typography variant="h2"> Editar Evaluacion </Typography>
      <CustomForm onSubmit={onSubmit}>
        <TextField
          error={error}
          helperText={
            error && "El titulo de la evaluacion no puede estar vacio"
          }
          value={titulo}
          onChange={onChangeTitulo}
          label="Titulo de Evaluacion"
        />
        <Button variant="contained" type="submit">
          Editar
        </Button>
      </CustomForm>
    </>
  );
}

export default EditarEvaluacion;
