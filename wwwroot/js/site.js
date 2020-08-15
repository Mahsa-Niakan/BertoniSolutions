
function showComments(pictureId) {
    console.log(pictureId);
    $("#comments").html("");
    $.ajax(
        "https://jsonplaceholder.typicode.com/comments?postId=" + pictureId,

    ).done(function (result) {

        jQuery.each(result, function (index, value) {
            console.log(value);
            let comment = $("#comment-template").clone();
            comment.find(".comment-name").text(value.name);
            comment.find(".comment-email").text(value.email);
            comment.find(".comment-body").text(value.body);
            comment.appendTo("#comments").show();

        })
    }
    )
}
$(document).ready(function () {
    $.ajax(
        "https://jsonplaceholder.typicode.com/albums",

    ).done(function (result) {
        console.log(result);
        jQuery.each(result, function (index, value) {
            $("<option></option>").text(value.title).val(value.id).appendTo("#album-select");
        })
    }
    )

    $("#select-album-btn").click(
        function () {
            $("#pictures-table-body").html("");
            $.ajax(
                "https://jsonplaceholder.typicode.com/photos?albumId=" + $("#album-select").val(),

            ).done(function (result) {
                console.log(result);

                jQuery.each(result, function (index, value) {
                    $("<tr></tr>").append("<td>" + value.title + "</td>")
                        .append("<td><img src='" + value.thumbnailUrl + "' /></td>")
                        .append("<button onclick='showComments(" + value.id + ")'>Show Comments</button>")
                        .appendTo("#pictures-table-body");
                })
            }
            )

        }






    )


}

)