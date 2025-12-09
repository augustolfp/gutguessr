-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "heading" INTEGER NOT NULL,
    "pitch" INTEGER NOT NULL,
    "country" TEXT,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);
