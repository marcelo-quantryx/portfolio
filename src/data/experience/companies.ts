import type { Company } from '../../types/experience';

export const companies: Record<string, Company> = {
  xiatech: {
    name: "Xiatech Consulting Ltd",
    website: "https://www.xiatech.io/",
    location: "London, UK"
  },
  isawItFirst: {
    name: "I Saw It First",
    website: "https://www.isawitfirst.com/",
    location: "Manchester, UK"
  },
  freelance: {
    name: "UpWork",
    website: "https://www.upwork.com/freelancers/marceloribeiro10",
    location: "Remote",
    additionalLinks: [
      {
        name: "Quantryx",
        url: "https://quantryx.com"
      }
    ]
  },
  smbcUk: {
    name: "SMBC",
    website: "https://www.smbcgroup.com/",
    location: "London, United Kingdom"
  },
  itau: {
    name: "Banco Itaú BBA",
    website: "https://www.itau.com.br/itaubba-pt",
    location: "São Paulo, Brazil"
  }
};