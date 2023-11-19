import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.primary[500]}
          >
            COSMETIC PRODUCTS
          </Typography>
          <div>
            Notre entreprise est dédiée à l'art de la beauté. Nous nous
            engageons à vous fournir des produits cosmétiques de haute qualité
            qui vous aideront à révéler votre beauté naturelle.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            À Propos de Nous
          </Typography>
          <Typography mb="30px">Carrières</Typography>
          <Typography mb="30px">Nos Magasins</Typography>
          <Typography mb="30px">Conditions Générales</Typography>
          <Typography mb="30px">Politique de Confidentialité</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="20px">
            Service Client
          </Typography>
          <Typography mb="30px">Centre d'Aide</Typography>
          <Typography mb="30px">Suivre Votre Commande</Typography>
          <Typography mb="30px">Achats en Gros et Corporate</Typography>
          <Typography mb="30px">Retours & Remboursements</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contactez-Nous
          </Typography>
          <Typography mb="30px">
            Tanger, Mojamaa Hassani
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: vecommercial.marketing@gmail.com
          </Typography>
          <Typography mb="30px">(+212) 6 25 04 00 13</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
