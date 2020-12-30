CREATE PROCEDURE [Admin].[HyperLink_GetByShortLink]
	@LinkShort NVARCHAR(255)
AS
BEGIN
	SELECT  LinkId
		   ,LinkOrig
		   ,LinkShort
	FROM [Admin].[Links]
	WHERE LinkShort = @LinkShort
	      AND Deleted = 0;
END
GO
