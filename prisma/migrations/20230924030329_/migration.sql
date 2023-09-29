-- CreateEnum
CREATE TYPE "WorkType" AS ENUM ('Onsite', 'Remote', 'Hybrid');

-- CreateEnum
CREATE TYPE "Frameworks" AS ENUM ('Angular', 'Flutter', 'React', 'Nodejs');

-- CreateTable
CREATE TABLE "Intern" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "worktype" "WorkType" NOT NULL,
    "framework" "Frameworks" NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Intern_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Applications" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Applications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApplicationFramework" (
    "id" TEXT NOT NULL,
    "name" "Frameworks" NOT NULL,
    "applicationid" TEXT NOT NULL,

    CONSTRAINT "ApplicationFramework_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InternApplication" (
    "id" TEXT NOT NULL,
    "internid" TEXT NOT NULL,
    "applicationid" TEXT NOT NULL,

    CONSTRAINT "InternApplication_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Intern_email_key" ON "Intern"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Intern_name_key" ON "Intern"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Applications_name_key" ON "Applications"("name");

-- AddForeignKey
ALTER TABLE "ApplicationFramework" ADD CONSTRAINT "ApplicationFramework_applicationid_fkey" FOREIGN KEY ("applicationid") REFERENCES "Applications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InternApplication" ADD CONSTRAINT "InternApplication_internid_fkey" FOREIGN KEY ("internid") REFERENCES "Intern"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InternApplication" ADD CONSTRAINT "InternApplication_applicationid_fkey" FOREIGN KEY ("applicationid") REFERENCES "Applications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
