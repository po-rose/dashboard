import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {};

export default withVanillaExtract(nextConfig);
