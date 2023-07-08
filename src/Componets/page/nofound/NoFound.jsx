import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const NoFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        Esto es una alerta —{" "}
        <strong>Error 404 ud no se encuentra dentro del sitio</strong>
      </Alert>
    </div>
  );
};

export default NoFound;
