BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Session_tb] (
    [id] INT NOT NULL IDENTITY(1,1),
    [user_id] VARCHAR(100),
    [client_id] VARCHAR(150),
    [status] VARCHAR(20),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Session_tb_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Session_tb_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Department_tb] (
    [id] INT NOT NULL IDENTITY(1,1),
    [department] VARCHAR(65) NOT NULL,
    [division] VARCHAR(65),
    [divisionalHead] VARCHAR(65),
    [unitsCount] INT,
    [Hod] VARCHAR(50),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Department_tb_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Department_tb_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Department_tb_id_key] UNIQUE NONCLUSTERED ([id]),
    CONSTRAINT [Department_tb_department_key] UNIQUE NONCLUSTERED ([department])
);

-- CreateTable
CREATE TABLE [dbo].[User_tb] (
    [id] INT NOT NULL IDENTITY(1,1),
    [email] VARCHAR(50) NOT NULL,
    [firstName] VARCHAR(50) NOT NULL,
    [lastName] VARCHAR(50),
    [clerkUserId] VARCHAR(200) NOT NULL,
    [imageUrl] TEXT,
    [status] BIT CONSTRAINT [User_tb_status_df] DEFAULT 0,
    [role] VARCHAR(20),
    [userId] INT,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [User_tb_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [User_tb_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [User_tb_email_key] UNIQUE NONCLUSTERED ([email]),
    CONSTRAINT [User_tb_clerkUserId_key] UNIQUE NONCLUSTERED ([clerkUserId])
);

-- AddForeignKey
ALTER TABLE [dbo].[User_tb] ADD CONSTRAINT [User_tb_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[Department_tb]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
