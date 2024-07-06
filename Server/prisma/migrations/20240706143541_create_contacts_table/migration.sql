-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
