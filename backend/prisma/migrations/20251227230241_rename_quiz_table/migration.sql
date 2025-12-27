/*
  Warnings:

  - You are about to drop the column `quiz_id` on the `Round` table. All the data in the column will be lost.
  - You are about to drop the `Quiz` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `game_session_id` to the `Round` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Round" DROP CONSTRAINT "Round_quiz_id_fkey";

-- AlterTable
ALTER TABLE "Round" DROP COLUMN "quiz_id",
ADD COLUMN     "game_session_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Quiz";

-- CreateTable
CREATE TABLE "GameSession" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GameSession_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Round" ADD CONSTRAINT "Round_game_session_id_fkey" FOREIGN KEY ("game_session_id") REFERENCES "GameSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
