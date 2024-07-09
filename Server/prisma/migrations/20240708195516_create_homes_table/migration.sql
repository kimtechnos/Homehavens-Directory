-- CreateTable
CREATE TABLE "homes_table" (
    "id" TEXT NOT NULL,
    "homeTitle" TEXT NOT NULL,
    "homeLocation" TEXT NOT NULL,
    "homeType" INTEGER NOT NULL,
    "homePrice" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "homes_table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "homes_table_homeType_idx" ON "homes_table"("homeType");
