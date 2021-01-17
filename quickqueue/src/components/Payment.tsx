import React from "react";
import { TextField, Grid, Typography, Button } from "@material-ui/core";
import { Container, Paper, Box } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    container: {
      position: "relative",
      zIndex: 1100,
      marginTop: "110px",
      marginBottom: "45px",
    },
    mainBox: {
      position: "relative",
      marginTop: "100px",
      padding: "10px 20px",
      borderBottomRightRadius: "4px",
      borderBottomLeftRadius: "4px",
      background: theme.palette.background.default,
    },
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    button: {
      marginRight: theme.spacing(1),
    },
    control: {
      padding: theme.spacing(2),
    },
  })
);

//Reference: https://github.com/angeloron/react-material-ui-stripe-payment-form
//https://medium.com/javascript-in-plain-english/stripe-payment-form-with-reactjs-and-material-ui-part-4-118e60fca962
export const Payment: React.FunctionComponent<any> = (props) => {
  const classes = useStyles();
  const cardsLogo = ["amex", "discover", "mastercard", "visa", "paypal"];

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Container maxWidth="md" className={classes.container}>
          <Paper elevation={5}>
            <Box className={classes.mainBox}>
              <form
                autoComplete="off"
                className={classes.form}
                onSubmit={(e) => {
                  e.preventDefault();
                  //handleNext();
                }}
              >
                <Grid container spacing={3}>
                  <Grid container item xs={12}>
                    <Typography variant="h6">Payment Data</Typography>
                  </Grid>
                  <Grid container item xs={12}>
                    {cardsLogo.map((e: string) => (
                      <img
                        key={e}
                        src={`./cards/${e}.png`}
                        alt={e}
                        width="50px"
                        text-align="bottom"
                        style={{ padding: "0 5px" }}
                      />
                    ))}
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    <TextField
                      label="Credit Card Number"
                      name="ccnumber"
                      variant="outlined"
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Amount"
                      name="amount"
                      variant="outlined"
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    <TextField
                      label="Expiration Date"
                      name="ccexp"
                      variant="outlined"
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    <TextField
                      label="CVC"
                      name="cvc"
                      variant="outlined"
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid container item justify="flex-end">
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      onClick={() => {}}
                    >
                      Place order
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Paper>
        </Container>
      </Grid>
    </div>
  );
};
