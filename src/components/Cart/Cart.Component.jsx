import React from 'react'
import { ContainerWrapperStyle, TopDetailImageStyle, PageHeaderStyle, TitleStyle, NumberStyle, ExplanationStyle, BodyContainerStyle, CardListContainerStyle, CheckoutContainerStyle, CardStyle, ImageContainerStyle, RemoveIconStyle, ColorBadgeStyle, ColorCircleStyle, ProductImageStyle, PoductInfoStyle, NameStyle, PriceStyle, CheckoutBorderImageStyle, CheckoutHeaderStyle, CheckoutTitle, CheckoutNumberStyle, CheckoutPriceStyle, CheckoutButton, CheckoutFooterStyle, CheckoutPaymentMethods, CheckoutMethodImageStyle, CheckoutPaymentText } from "./Cart.Styles";
import TopDetailImage from '../../assets/images/top-detail.svg';
import ProductImage from '../../assets/images/products/pexels-monstera-6311449.png';
import VectorImage from '../../assets/images/vector.svg';
import CheckoutBorderImage from '../../assets/images/checkout-border.svg';
import ShopPayImage from '../../assets/images/shoppay.svg';
import GooglePayImage from '../../assets/images/googlepay.svg';
import PayPalImage from '../../assets/images/paypal.svg';

const CartComponent = () => {
    return (
        <ContainerWrapperStyle>
            <PageHeaderStyle>
                <TopDetailImageStyle src={TopDetailImage} />

                <TitleStyle>your cart <NumberStyle>(7)</NumberStyle></TitleStyle>
                <ExplanationStyle>your little cutey shopping bag 🙃</ExplanationStyle>
            </PageHeaderStyle>

            <BodyContainerStyle style={{
                backgroundImage: `url('${VectorImage}')`
            }}>
                <CardListContainerStyle>
                    <CardStyle>
                        <ImageContainerStyle>
                            <RemoveIconStyle>X</RemoveIconStyle>

                            <ColorBadgeStyle>
                                <ColorCircleStyle backgroundColor="#25396C"></ColorCircleStyle> navy blue
                            </ColorBadgeStyle>

                            <ProductImageStyle src={ProductImage} />
                        </ImageContainerStyle>

                        <PoductInfoStyle>
                            <NameStyle>Punahärö Futurista White- Blue (L)</NameStyle>
                            <PriceStyle>€25.00</PriceStyle>
                        </PoductInfoStyle>
                    </CardStyle>

                    <CardStyle>
                        <ImageContainerStyle>
                            <RemoveIconStyle>X</RemoveIconStyle>

                            <ColorBadgeStyle dark>
                                <ColorCircleStyle backgroundColor="#ffffff"></ColorCircleStyle> color name
                            </ColorBadgeStyle>

                            <ProductImageStyle src={ProductImage} />
                        </ImageContainerStyle>

                        <PoductInfoStyle>
                            <NameStyle>Punahärö Futurista White- Blue (L)</NameStyle>
                            <PriceStyle>€25.00</PriceStyle>
                        </PoductInfoStyle>
                    </CardStyle>

                    <CardStyle>
                        <ImageContainerStyle>
                            <RemoveIconStyle>X</RemoveIconStyle>

                            <ColorBadgeStyle>
                                <ColorCircleStyle backgroundColor="#25396C"></ColorCircleStyle> navy blue
                            </ColorBadgeStyle>

                            <ProductImageStyle src={ProductImage} />
                        </ImageContainerStyle>

                        <PoductInfoStyle>
                            <NameStyle>Punahärö Futurista White- Blue (L)</NameStyle>
                            <PriceStyle>€25.00</PriceStyle>
                        </PoductInfoStyle>
                    </CardStyle>

                    <CardStyle>
                        <ImageContainerStyle>
                            <RemoveIconStyle>X</RemoveIconStyle>

                            <ColorBadgeStyle dark>
                                <ColorCircleStyle backgroundColor="#ffffff"></ColorCircleStyle> color name
                            </ColorBadgeStyle>

                            <ProductImageStyle src={ProductImage} />
                        </ImageContainerStyle>

                        <PoductInfoStyle>
                            <NameStyle>Punahärö Futurista White- Blue (L)</NameStyle>
                            <PriceStyle>€25.00</PriceStyle>
                        </PoductInfoStyle>
                    </CardStyle>

                    <CardStyle>
                        <ImageContainerStyle>
                            <RemoveIconStyle>X</RemoveIconStyle>

                            <ColorBadgeStyle>
                                <ColorCircleStyle backgroundColor="#25396C"></ColorCircleStyle> navy blue
                            </ColorBadgeStyle>

                            <ProductImageStyle src={ProductImage} />
                        </ImageContainerStyle>

                        <PoductInfoStyle>
                            <NameStyle>Punahärö Futurista White- Blue (L)</NameStyle>
                            <PriceStyle>€25.00</PriceStyle>
                        </PoductInfoStyle>
                    </CardStyle>

                    <CardStyle>
                        <ImageContainerStyle>
                            <RemoveIconStyle>X</RemoveIconStyle>

                            <ColorBadgeStyle dark>
                                <ColorCircleStyle backgroundColor="#ffffff"></ColorCircleStyle> color name
                            </ColorBadgeStyle>

                            <ProductImageStyle src={ProductImage} />
                        </ImageContainerStyle>

                        <PoductInfoStyle>
                            <NameStyle>Punahärö Futurista White- Blue (L)</NameStyle>
                            <PriceStyle>€25.00</PriceStyle>
                        </PoductInfoStyle>
                    </CardStyle>
                </CardListContainerStyle>

                <CheckoutContainerStyle>
                    <CheckoutBorderImageStyle src={CheckoutBorderImage} />

                    <CheckoutHeaderStyle>
                        <CheckoutTitle>
                            <CheckoutNumberStyle>7</CheckoutNumberStyle> Item Total
                        </CheckoutTitle>
                        <CheckoutPriceStyle>€175,00</CheckoutPriceStyle>
                        <CheckoutButton>checkout</CheckoutButton>
                    </CheckoutHeaderStyle>

                    <CheckoutFooterStyle>
                        <CheckoutPaymentMethods>
                            <CheckoutMethodImageStyle src={ShopPayImage} />
                            <CheckoutMethodImageStyle src={GooglePayImage} />
                            <CheckoutMethodImageStyle src={PayPalImage} />
                        </CheckoutPaymentMethods>

                        <CheckoutPaymentText>Tax included and shipping calculated at checkout</CheckoutPaymentText>
                    </CheckoutFooterStyle>

                </CheckoutContainerStyle>
            </BodyContainerStyle>
        </ContainerWrapperStyle>
    )
}

export default CartComponent