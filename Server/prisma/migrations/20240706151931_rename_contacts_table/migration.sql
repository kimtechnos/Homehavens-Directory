/*
  Warnings:

  - You are about to drop the `Contact` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_userId_fkey";

-- DropTable
DROP TABLE "Contact";

-- CreateTable
CREATE TABLE "contacts_table" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "contacts_table_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "contacts_table" ADD CONSTRAINT "contacts_table_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
