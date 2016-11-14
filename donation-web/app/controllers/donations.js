'use strict';
const Donation = require('../models/donation');
const User = require('../models/user');
const Candidate = require('../models/candidate');

exports.home =
{
  handler: (request, reply) => {
    Candidate.find({}).then(candidates => {
      reply.view('home', {
        title: 'Make a Donation',
        candidates: candidates,
      });
    }).catch(err => {
      reply.redirect('/');
    })
  },
};

exports.report =
{
  handler: function (request, reply) {
    Donation.find({}).populate('donor').populate('candidate').then(allDonations => {
      reply.view('report', {
        title: 'Donations to Date',
        donations: allDonations,
      });
    }).catch( err => {
      reply.redirect('/');
    });
  },
};

exports.donate =
{
  handler: function (request, reply) {
    var userEmail = request.auth.credentials.loggedInUser;
    User.findOne({ email: userEmail }).then(user => {
      let data = request.payload;
      const donation = new Donation(data);
      const rawCandidate = request.payload.candidate.split(',');
      Candidate.findOne({
        lastName: rawCandidate[0],
        firstName: rawCandidate[1],
      }).then(candidate => {
        donation.donor = user._id;
        donation.candidate = candidate._id;
        donation.save().then(newDonation => {
          reply.redirect('/report');
        });
      }).catch(err => {
        reply.redirect('/');
      });

      return donation.save();
    }).then( newDonation => {
      reply.redirect('/report');
    }).catch( er => {
      reply.redirect('/');
    });
  },
};
