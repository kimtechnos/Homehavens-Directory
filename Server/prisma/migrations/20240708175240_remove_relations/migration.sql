/*
  Warnings:

  - You are about to drop the column `userId` on the `contacts_table` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "contacts_table" DROP CONSTRAINT "contacts_table_userId_fkey";

-- AlterTable
ALTER TABLE "contacts_table" DROP COLUMN "userId";
