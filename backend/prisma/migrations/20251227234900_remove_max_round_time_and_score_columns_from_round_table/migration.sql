/*
  Warnings:

  - You are about to drop the column `max_round_score` on the `Round` table. All the data in the column will be lost.
  - You are about to drop the column `max_round_time` on the `Round` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Round" DROP COLUMN "max_round_score",
DROP COLUMN "max_round_time";
