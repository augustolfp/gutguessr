#!/bin/sh

# Cores no Terminal:
ON_GREEN='\033[42m'
COLOR_OFF='\033[0m'

# Variáveis:
VERTICAL_SPACING='\n\n\n\n\n\n'
DASHES='---------------------------'

echo -e "${VERTICAL_SPACING} ${ON_GREEN} ${DASHES} Instalando as dependências do frontend: ${DASHES} ${COLOR_OFF} ${VERTICAL_SPACING}"
cd frontend
npm install

echo -e "${VERTICAL_SPACING} ${ON_GREEN} ${DASHES} Instalando as dependências do backend: ${DASHES} ${COLOR_OFF} ${VERTICAL_SPACING}"
cd ..
cd backend
npm install

echo -e "${VERTICAL_SPACING} ${ON_GREEN} ${DASHES} Aplicando migrations: ${DASHES} ${COLOR_OFF} ${VERTICAL_SPACING}"
npx prisma migrate dev

echo -e "${VERTICAL_SPACING} ${ON_GREEN} ${DASHES} Gerando o Prisma Client: ${DASHES} ${COLOR_OFF} ${VERTICAL_SPACING}"
npx prisma generate

echo -e "${VERTICAL_SPACING} ${ON_GREEN} ${DASHES} Aplicando Seeds: ${DASHES} ${COLOR_OFF} ${VERTICAL_SPACING}"
npx prisma db seed

