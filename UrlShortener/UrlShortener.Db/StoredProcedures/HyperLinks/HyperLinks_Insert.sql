CREATE PROCEDURE [Admin].[HyperLinks_Insert]
(
	 @LinkOrig		NVARCHAR(256)
	,@LinkShort			NVARCHAR(256)
	,@CreatedBy			NVARCHAR(256)
)
AS
BEGIN
	DECLARE @Today DATETIME2(7) = GETUTCDATE();

	INSERT INTO [Admin].[Links]
	(
		 LinkOrig
		,LinkShort
		,Deleted
		,CreatedBy
		,CreatedDate
		,UpdatedBy
		,UpdatedDate
	)
	VALUES
	(
		 @LinkOrig
		,@LinkShort
		,0
		,@CreatedBy
		,@Today
		,@CreatedBy
		,@Today
	);
END
GO