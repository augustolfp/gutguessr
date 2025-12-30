/*
  Warnings:

  - Added the required column `round_number` to the `RoundBlueprint` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RoundBlueprint" ADD COLUMN     "round_number" INTEGER NOT NULL;
