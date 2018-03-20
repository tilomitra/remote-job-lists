const Handlebars = require("handlebars");

const jobTemplate = `
<table class="container" bgcolor>
<tbody>
<tr>
    <td></td>
    <td class="container" align bgcolor="#FFFFFF">
        <div class="content">
            <p>
                Hi!
            </p>
            <p class="lead">
                There were <span style="color: blue; font-weight: bold;">{{total}}</span> remote jobs posted between <span style="color: blue; font-weight: bold;">{{fromDate}}</span> and {{toDate}} that may be interesting to you.
            </p>

            <h4>You told us you were interested in:</h4>
            <p>
            {{#each tags}}
                <span style="background: #e1ecf4; color: #15c; border-radius: 2px; font-size: 12px; border: 1px solid #e1ecf4; padding: 5px 6px; margin-right: 3px; margin-bottom: 5px; white-space: nowrap;">
                    {{this}}
                </span>
            {{/each}}
            </p>
        </div>

        <div class="content">
        <p class="lead">
            Here are just a few jobs that matched the categories that you mentioned.
        </p>
        </div>
        {{#each jobs}}
        <div class="content" style="margin-top: 10px; padding-top: 10px;">
            <table bgcolor="">
                <tbody><tr>
                    <td>
                        <h4>
                            <a href="https://www.remotejoblists.com/job/{{id}}">
                            {{title}}
                            </a>
                            <small>at {{company}}</small>
                        </h4>
                        <p>
                        {{#each tags}}
                            <span style="background: #e1ecf4; color: #15c; border-radius: 2px; font-size: 12px; border: 1px solid #e1ecf4; padding: 5px 6px; margin-right: 3px; margin-bottom: 5px;white-space: nowrap;">
                                {{this}}
                            </span>
                        {{/each}}
                        </p>
                    </td>
                </tr>
            </tbody></table>
        </div>
        {{/each}}

        <p class="lead">
            These are just 5 of the jobs that were matched against your preferences. To view all {{total}} job listings, head over to Remote Job Lists.
        </p>
        <p style="text-align: center; margin-top: 20px;">
            <a style="background: #333; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px;" href="https://www.remotejoblists.com/job/{{id}}">View {{total}} Relevant Remote Jobs</a>
        </p>
    </td>
    <td></td>
</tr>
</tbody>
</table>
`;

function generateEmailTemplate({ jobs, fromDate, toDate, tags }) {
    var template = Handlebars.compile(jobTemplate);
    var html = template({
        jobs: jobs.slice(0, 5),
        fromDate,
        toDate,
        tags: tags,
        total: jobs.length
    });
    return html;
}

module.exports = generateEmailTemplate;
