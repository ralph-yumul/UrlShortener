CREATE PROCEDURE [Admin].[Links_Get]
(
	 @SearchString	NVARCHAR(256)
	,@Skip			INT
	,@Take			INT
	,@Direction		NVARCHAR(255)
	,@Field			NVARCHAR(257)
	,@Count			INT				OUTPUT
)
AS
BEGIN
	DECLARE @Links TABLE
	(
		LinkId			INT,
		LinkShort		NVARCHAR(255),
		LinkOrig		NVARCHAR(MAX)
	);

	INSERT INTO @Links
	(
		LinkId,
		LinkShort,
		LinkOrig
	)
	SELECT LinkId
		  ,LinkShort, LinkOrig
	FROM [Admin].[Links]
	WHERE Deleted = 0
		AND (LinkShort LIKE CONCAT('%',@SearchString,'%'));
	
	SET @Count = (SELECT COUNT(1) FROM @Links);

	SELECT	LinkId
			,LinkShort, LinkOrig
	FROM @Links
	ORDER BY CASE WHEN(@Field = '' AND @Direction = '')
			THEN LinkShort
		END ASC,
		CASE WHEN(@Field = 'LinkShort' AND @Direction = 'asc')
			THEN LinkShort
		END ASC,
		CASE WHEN(@Field = 'LinkShort' AND @Direction = 'desc')
			THEN LinkShort
		END DESC
	OFFSET @Skip ROWS FETCH NEXT @Take ROWS ONLY;
END
GO