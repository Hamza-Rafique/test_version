import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, optimism, arbitrum, base, zora } from 'wagmi/chains';
import { http } from 'wagmi'
export const config = getDefaultConfig({
  appName: 'Test',
  projectId: 'Test Project ID', 
  chains: [mainnet, polygon, optimism, arbitrum, base, zora],
  ssr: true, 
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
    [zora.id]: http(),
  },
});