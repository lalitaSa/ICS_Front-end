import { useEffect, useState } from "react";
import {
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductStarButton,
  ProductImage,
  ProductMetaWrapper,
  AvatarProduct
} from "../../styles/product";
import Avatar from '@mui/material/Avatar';
import { Stack, Tooltip, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productdetail";

export default function SingleProduct({ product, matches }) {
  const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
    useDialogModal(ProductDetail);

  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
     
      
      <Avatar src={product.profile_image_url}/>
      <ProductMetaWrapper>
        <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
          {product.name}
        </Typography>
      </ProductMetaWrapper>
        <ProductImage src={product.images} />

        <ProductActionsWrapper>
          <Stack direction={matches ? "row" : "column"}>
            <ProductStarButton>
            <StarIcon />{product.rating}
            </ProductStarButton>
            <ProductActionButton>
              <Tooltip placement="left" title="share this product">
                <ShareIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <Tooltip placement="left" title="Full view">
                <FitScreenIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
    
    </>
  );
}
