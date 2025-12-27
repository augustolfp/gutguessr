/*
  Warnings:

  - You are about to drop the column `username` on the `GameSession` table. All the data in the column will be lost.
  - Added the required column `player_name` to the `GameSession` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GameSession" DROP COLUMN "username",
ADD COLUMN     "player_name" TEXT NOT NULL;
