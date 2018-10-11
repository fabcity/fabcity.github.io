/*Video background header calling a youtube video ID*/
/*vid is the ID for the video*/
var vid = "IswJ3tZyhEM",
    streams,
    video_focused = true,
    video_tag = $("#video"),
    video_obj = video_tag.get(0);
$.getJSON("https://query.yahooapis.com/v1/public/yql", {
    q: "select * from csv where url='https://www.youtube.com/get_video_info?video_id=" + vid + "'",
    format: "json"
}, function(data) {
    if (data.query.results && !data.query.results.row.length) {
        streams = parse_youtube_meta(data.query.results.row.col0);
        video_tag.attr({
            src: streams['1080p'] || streams['720p'] || streams['360p']
        });

        document.addEventListener("visibilitychange", function() {
            video_focused = !video_focused ? video_obj.play() : video_obj.pause();
        });
    } else {
            $('pre').text('YQL request error...');
    }
});

function parse_youtube_meta(rawdata) {
    var data = parse_str(rawdata),
        streams = (data.url_encoded_fmt_stream_map + ',' + data.adaptive_fmts).split(','),
        result = {};
    $.each(streams, function(n, s) {
        var stream = parse_str(s),
            itag = stream.itag * 1,
            quality = false,
            itag_map = {
                18: '360p',
                22: '720p',
                37: '1080p',
                38: '3072p',
                82: '360p3d',
                83: '480p3d',
                84: '720p3d',
                85: '1080p3d',
                133: '240pna',
                134: '360pna',
                135: '480pna',
                136: '720pna',
                137: '1080pna',
                264: '1440pna',
                298: '720p60',
                299: '1080p60na',
                160: '144pna',
                139: "48kbps",
                140: "128kbps",
                141: "256kbps"
            };
        //if (stream.type.indexOf('o/mp4') > 0) console.log(stream);
        if (itag_map[itag]) result[itag_map[itag]] = stream.url;
    });
    return result;
};

function parse_str(str) {
    return str.split('&').reduce(function(params, param) {
        var paramSplit = param.split('=').map(function(value) {
            return decodeURIComponent(value.replace('+', ' '));
        });
        params[paramSplit[0]] = paramSplit[1];
        return params;
    }, {});
}

